using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactProject.Models;
using ReactProject.Repository;

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoodsController : ControllerBase
    {
        private EFGenericRepository<Products> Product;
        public GoodsController()
        {
            Product = new EFGenericRepository<Products>(new ShopContext());
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Product.Get().ToList());
        }
    }
}