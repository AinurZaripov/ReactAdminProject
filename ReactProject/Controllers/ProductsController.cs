using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactProject.Models;
using ReactProject.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private EFGenericRepository<Products> Products;
        public ProductsController()
        {
            Products = new EFGenericRepository<Products>(new ShopContext());
        }

        // GET: api/<controller>
        [HttpGet]
        public JsonResult Get()
        {
            return Json(Products.Get().ToList());
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post(Models.Products Products)
        {
            return Ok();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return Ok();
        }
    }
}
