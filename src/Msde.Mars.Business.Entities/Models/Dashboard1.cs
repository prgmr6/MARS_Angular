using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class Dashboard1
    {
        public string ProgramName { get; set; }
        public string Description { get; set; }
        public string FundType { get; set; }
        public string Amount { get; set; }
        public string Percent { get; set; }
    }
}
