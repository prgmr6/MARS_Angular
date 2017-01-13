using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class ValidationFailure
    {
        public string PropertyName { get; set; }
        public string ErrorMessage { get; set; }
    }
}
