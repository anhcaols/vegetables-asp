using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vegetables.Models.Entities;

namespace Vegetables.Areas.admin.Controllers
{
    public class HomeAdminController : Controller
    {
        // GET: admin/HomeAdmin
        public ActionResult Index()
        {
            //TaiKhoan tk = (TaiKhoan)Session["admin"];
            //if (tk == null) return View("_LoginAdmin");
            return View();
        }

        //    public JsonResult checkLogin(FormCollection collection)
        //    {
        //        Vegetables_DBContext db = new Vegetables_DBContext();
        //        string username = collection["username"];
        //        string password = collection["password"];
        //        JsonResult jr = new JsonResult();
        //        TaiKhoan u = db.TaiKhoans.FirstOrDefault(x => x.TaiKhoan1 == username);
        //        if (u == null)
        //        {
        //            jr.Data = new
        //            {
        //                status = "F"
        //            };
        //        }
        //        else
        //        {
        //            if (u.MatKhau.Trim() == GetMD5(password) && u.Quyen == "admin")
        //            {
        //                Session["admin"] = u;
        //                jr.Data = new
        //                {
        //                    status = "OK"
        //                };
        //            }
        //            else
        //            {
        //                jr.Data = new
        //                {
        //                    status = "F"
        //                };
        //            }
        //        }
        //        return Json(jr, JsonRequestBehavior.AllowGet);
        //    }
        //    private String GetMD5(string txt)
        //    {
        //        String str = "";
        //        Byte[] buffer = System.Text.Encoding.UTF8.GetBytes(txt);
        //        System.Security.Cryptography.MD5CryptoServiceProvider md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();
        //        buffer = md5.ComputeHash(buffer);
        //        foreach (Byte b in buffer)
        //        {
        //            str += b.ToString("X2");
        //        }
        //        return str;
        //    }
        //    public ActionResult Logout()
        //    {
        //        Session.Remove("admin");
        //        return Redirect("/admin/HomeAdmin/Index");
        //    }

        //    public ActionResult KhachHang()
        //    {
        //        Vegetables_DBContext db = new Vegetables_DBContext();
        //        return PartialView("_KhachHangAdmin", (int)Math.Ceiling((double)db.KhachHangs.ToList().Count / 10));

        //    }

        public ActionResult Product()
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            return PartialView("_ProductAdmin", (int)Math.Ceiling((double)db.SanPhams.ToList().Count / 10));

        }

        public ActionResult Order()
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            return PartialView("_OrderAdmin", (int)Math.Ceiling((double)db.DonDats.ToList().Count / 10));

        }

        //public ActionResult RenderProduct()
        //{
        //    Vegetables_DBContext db = new Vegetables_DBContext();
        //    //List<SanPham> dsSanPham = db.SanPhams.ToList();
        //    var listProduct = (from pd in db.SanPhams join lsp in db.LoaiSPs on pd.MaLoaiSP equals lsp.MaLoaiSP select new  { 
        //    }).ToList();
        //    return PartialView("_ProductAdmin", listProduct);

        //}
    }
}