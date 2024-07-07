export class MenuModel{
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Ana Sayfa",
        icon: "far fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: []
    },
    {
        name: "Admin",
        icon: "",
        url: "",
        isTitle: true,
        subMenus: []
    },
    {
        name: "Yönetim",
        icon: "far fa fa-user",
        url: "",
        isTitle: false,
        subMenus: [
            {
                name: "Kullanıcılar",
                icon: "far fa fa-user",
                url: "/users",
                isTitle: false,
                subMenus: []
            }
        ]
    }
]