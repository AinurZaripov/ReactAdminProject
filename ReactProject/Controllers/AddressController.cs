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
    public class AddressController : Controller
    {
        private EFGenericRepository<Address> Address;
        public AddressController()
        {
            Address = new EFGenericRepository<Address>(new ShopContext());
        }

        // GET: api/<controller>
        [HttpGet]
        public JsonResult Get()
        {
            var address = Address.Get().ToList();
             return Json(address);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post(Models.Address Address)
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
