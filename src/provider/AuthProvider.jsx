import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const axiosCommon = useAxiosCommon();
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const google = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)
            const user = { email: currentUser?.email }
            if (currentUser) {
                axiosCommon.post('/jwt', user)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })
                    .catch(error => console.log(error));
            } else {
                localStorage.removeItem('access-token')
                setLoading(false);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        google,
        logOut,
        createUser,
        login
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;