export function getDashboardRoutes(rol) {
    switch (rol) {
        case "admin": return "/Dashboard/admin";
        case "professor": return "/Dashboard/professor";
        case "student": return "/Dashboard/student";
        case "family": return "/Dashboard/family";    
        default: return "/";
      } 
}
