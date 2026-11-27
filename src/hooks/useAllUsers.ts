import axios from "axios";
import { useState } from "react";
import type { UserApi } from "../types/userApi";
import type { UserProfileType } from "../types/userProfile";

// 全ユーザー一覧を取得するカスタムフック
export const useAllUsers = () => {
    const [users, setUsers] = useState<Array<UserProfileType>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const getUsers = () => {
        setLoading(true);
        setError(false);

        axios.get<Array<UserApi>>("https://jsonplaceholder.typicode.com/users").then((res) => {
        
        const data = res.data.map((user) => ({
                userId: user.id,
                name: `${user.name} ${user.username}`,
                email: user.email,
                address: `${user.address.city} ${user.address.suite} ${user.address.city}`
            })
        );
            setUsers(data);
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        })
    }

    return { getUsers, users, loading, error};
}