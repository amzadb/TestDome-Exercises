function getPermissionList(permission: Permission): string[] {
    // return [];
    let permissionList: string[] = [];
    if (permission & Permission.Read) {
        permissionList.push("Read");
    }
    if (permission & Permission.Write) {
        permissionList.push("Write");
    }
    if (permission & Permission.Execute) {
        permissionList.push("Execute");
    }
    return permissionList;
}

enum Permission {
    Read = 1,
    Write = 2,
    Execute = 4
}

console.log(getPermissionList(Permission.Read | Permission.Write));