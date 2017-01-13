using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.Business.Entities.Models
{
    public class EventStream
    {
        public string EventId { get; set; }
        public string StreamId { get; set; }
        public long? Sequence { get; set; }
        public string EventName { get; set; }
        public string EventType { get; set; }
        public string EventBody { get; set; }
        public DateTime DateOccurred { get; set; }
        public DateTime DateRecorded { get; set; }
        public DateTime DateProjected { get; set; }
        public string ProjectedBy { get; set; }
        public int UserProfileId { get; set; }
        public string ServerVariables { get; set; }
    }
}
