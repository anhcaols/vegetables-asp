using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Vegetables.Models.Entities;

namespace Vegetables.APIControllers
{
    public class ProductController : ApiController
    {

        Vegetables_DBContext db = new Vegetables_DBContext();

        [HttpGet]
        public List<SanPham> GetProduct(int page)
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            var qr = db.SanPhams.OrderBy(x => x.MaSP).Skip((page - 1) * 10).Take(10);
            return qr.ToList();
        }
        public List<SanPham> GetListProduct(int sl)
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            var qr = db.SanPhams.Take(10);
            return qr.ToList();
        }

    }

}