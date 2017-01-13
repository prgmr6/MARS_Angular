using Msde.Mars.Business.Entities.Models;
using System;
using System.Collections.Generic;

namespace Msde.Mars.Business.Entities
{
    public class CustomerInformation: TransactionalInformation
    {
        public int CustomerID { get; set; }
        public string CustomerCode { get; set; }
        public string CompanyName { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }
        public List<Customer> Customers { get; set; }
    }
}
