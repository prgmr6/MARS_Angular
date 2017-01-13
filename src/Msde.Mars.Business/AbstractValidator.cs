using Msde.Mars.Business.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business
{
    public abstract class AbstractValidator<T>
    {
        public abstract ValidationResult Validate(T t);
    }

}
