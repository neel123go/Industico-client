import { signOut } from "firebase/auth";
import auth from "../Firebase.init";

const { useState, useEffect } = require("react");

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const userEmail = user?.email;
        if (userEmail) {
            fetch(`https://fierce-escarpment-90330.herokuapp.com/admin/${userEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                    }
                    return res.json();
                })
                .then(data => {
                    setAdmin(data);
                    setAdminLoading(false);
                });
        }
    }, [user]);

    return [admin, adminLoading];
}

export default useAdmin;