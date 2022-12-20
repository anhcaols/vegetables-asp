using System.Web.Mvc;

namespace Vegetables.Areas.admin
{
    public class adminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "admin_default",
                "admin/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                name: "Admin",
                url: "",
                defaults: new { controller = "HomeAdmin", action = "Index" }
            );

           
        }
    }
}