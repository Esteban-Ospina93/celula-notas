export const getLinkNavigate =  {
    "admin": [
        //Seguimiento de notas
        {
            "label":"Seguimiento de notas",
            "icon":"fas fa-fw fa-clipboard-list",
            "children":[
                {"path":"/Dashboard/ver-notas","label":"Ver Notas"},
                {"path":"/Dashboard/registrar-nota","label":"Registrar Nota"}
            ]

        },

    ],
    "professor": [
        {
            "label":"Seguimiento de notas",
            "icon":"fas fa-fw fa-clipboard-list",
            "children":[
                {"path":"/Dashboard/ver-notas","label":"Ver Notas"},
                {"path":"/Dashboard/registrar-nota","label":"Registrar Nota"}
            ]
        },
    ],
    "student": [
        {
            "label":"Seguimiento de notas",
            "icon":"fas fa-fw fa-clipboard-list",
            "children":[
                {"path":"/Dashboard/ver-mis-notas","label":"Ver Notas"},
            ]
        }
    ],
    "family": [
        {
            "label":"Seguimiento de notas",
            "icon":"fas fa-fw fa-clipboard-list",
            "children":[
                {"path":"/Dashboard/ver-notas","label":"Ver Notas"},
            ]
        }
    ],
    // Otros roles pueden ser añadidos aquí
    "all": [
        {"label":"Inicio", "path":"Dashboard", "icon":"fas fa-fw fa-home" },
        {"label":"Perfil", "path":"/Dashboard/perfil", "icon":"fas fa-fw fa-user" }
        
    ]

 }