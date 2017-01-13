using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Msde.Mars.Business.Entities.ViewModels.Salutations;
using Msde.Mars.Service;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/salutations")]
    [EnableCors("AllowSpecificOrigin")]
    public class SalutationController:Controller
    {
        /// <summary>
        /// Gets the list of <see cref="Salutation" />s.
        /// </summary>
        /// <returns>Returns the list of <see cref="Salutation" />s.</returns>
        [HttpGet]
        public virtual async Task<SalutationCollection> Get()
        {
            var salutations = new List<Salutation>()
                                      {
                                          new Salutation("Mr", "Mr"),
                                          new Salutation("Mrs", "Mrs"),
                                          new Salutation("Ms", "Ms"),
                                          new Salutation("Mx", "Mx"),
                                      };

            var collection = new SalutationCollection(salutations);
            return await Task.FromResult(collection);
        }
    }
}
