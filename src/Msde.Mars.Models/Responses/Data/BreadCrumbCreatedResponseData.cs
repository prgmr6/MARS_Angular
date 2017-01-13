using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Models.Responses.Data
{
    public class BreadCrumbCreatedResponseData:BaseResponseData
    {
        public int id { get; set; }
        public string BreadCrumbText { get; set; }
        public int MARS_Pageid { get; set; }
    }
}
