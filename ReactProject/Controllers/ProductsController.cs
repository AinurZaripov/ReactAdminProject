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
            var products = Products.Get().ToList();
             return Json(products);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var products = Products.FindById(id);
            if (products == null)
                return Json("Not found");
            return Json(products);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post(Products item)
        {
            try
            {
                Products.Create(item);
                return Json("Ok");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex);
                throw;
            }
        }
        [Microsoft.AspNetCore.Cors.EnableCors("CorsPolicy")]
        //[Route("{price:int}")]
        [HttpPut]
        public IActionResult Put(Models.Products item)
        {
            try
            {
                Products.Update(item);
                return Json("Ok");
            }
            catch (Exception ex)
            {
                return Json("Error: " + ex);
                throw;
            }
            
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return Ok();
        }
    }
}
