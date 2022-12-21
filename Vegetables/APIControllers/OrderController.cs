using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Vegetables.Models.Entities;

namespace Vegetables.APIControllers
{
    public class OrderController : ApiController
    {

        Vegetables_DBContext db = new Vegetables_DBContext();

        [HttpGet]
        public List<DonDat> GetOrder(int page)
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            var qr = db.DonDats.OrderBy(x => x.MaDD).Skip((page - 1) * 10).Take(10);
            return qr.ToList();
        }
        public List<DonDat> GetListOrder(int sl)
        {
            Vegetables_DBContext db = new Vegetables_DBContext();
            var qr = db.DonDats.Take(10);
            return qr.ToList();
        }
    }
}