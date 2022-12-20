using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Vegetables.Models.Entities;

namespace Vegetables.Controllers
{
    public class HomeController : Controller
    {

        Vegetables_DBContext db = new Vegetables_DBContext();
        
        public ActionResult Index()
        {
            return View();
        }

     

    }
}