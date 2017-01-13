using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Msde.Mars.Repositories
{
    [Table("EventStream")]
    public partial class EventStreams
    {
        [Key]
        public Guid EventId { get; set; }

        public Guid StreamId { get; set; }

        public long? Sequence { get; set; }

        [Required]
        [StringLength(256)]
        public string EventName { get; set; }

        [Required]
        [StringLength(256)]
        public string EventType { get; set; }

        [Required]
        public string EventBody { get; set; }

        public DateTime DateOccurred { get; set; }

        public DateTime DateRecorded { get; set; }

        public DateTime DateProjected { get; set; }

        public Guid ProjectedBy { get; set; }
    }
}
