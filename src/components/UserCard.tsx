import type { FC } from "react"
import type { UserProfileType } from "../types/userProfile";

type Props = {
    user:UserProfileType;
}

export const UserCard:FC<Props> = (props) => {
    
    const {user} = props;
    
    return(
        <>
            <dt>名前</dt>
            <dd>{user.name}</dd>
            <dt>メール</dt>
            <dd>{user.email}</dd>
            <dt>住所</dt>
            <dd>{user.address}</dd>
        </>
    )
}