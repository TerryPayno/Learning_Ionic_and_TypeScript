using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ionic_Test_Server.Controllers
{
    public class CarController : ApiController
    {


        // GET: api/Car
        public Car Get()
        {
            Car MyFirstCar = new Car();
            MyFirstCar.id = "1";
            MyFirstCar.name = "240sx";
            return MyFirstCar;
        }

        // POST: api/Car
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Car/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Car/5
        public void Delete(int id)
        {
        }
    }
    public class Car {
        public string id {get;set;}
        public string name { get; set; }
    }
}
