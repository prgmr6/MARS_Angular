using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class Dashboard2
    {
        public string DomainYear { get; set; }
        public string AgencyNum { get; set; }
        public string AgencyId { get; set; }
        public string AgencyName { get; set; }
        public string CFDADescription { get; set; }
        public string CFDA { get; set; }
        public string ReimbursementTotal { get; set; }
    }
}
