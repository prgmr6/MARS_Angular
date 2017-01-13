using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class ValidationResult
    {
        public bool IsValid;
        public IList<ValidationFailure> Errors;


    }
}
