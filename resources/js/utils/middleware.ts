import useStore from "../store";
import _ from "lodash";
import { isProxy, toRaw } from 'vue';


export default {
    canAccess(permissions: string[]|undefined, roles: string[]|undefined): boolean {
        if (permissions === undefined && roles === undefined) {
            return true;
        }

        const store = useStore();
        let currentUser = store.auth.getCurrentUser;
        let userPermissions:string[] = [];
        let userRoles:string[] = [];
        if (_.isEmpty(currentUser)) {
            console.log("==>");
            store.auth.actGetCurrentUserInfo();
            userPermissions = currentUser['permissions'];
            userRoles = currentUser['roles'];
        }
        
console.log("currentUser: ",  store.auth.currentUser);
console.log("Role: ", store.auth.roles);
console.log("permissions: ", userPermissions);

return true;
        // if (roles?.length) {
        //     const hasRoles = userRoles.filter(value => roles.includes(value));
        //     if (hasRoles.length) {
        //         return true;
        //     }
        // }

        // if (permissions?.length) {
        //     const hasPermissions = userPermissions.filter(value => permissions.includes(value));
        //     return !!hasPermissions.length
        // }

        // return false;
    }
}

