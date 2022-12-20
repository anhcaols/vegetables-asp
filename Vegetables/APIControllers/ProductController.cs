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
        public List<SanPham> GetListProduct()
        {
            return db.SanPhams.ToList();
        }
    }
    
}