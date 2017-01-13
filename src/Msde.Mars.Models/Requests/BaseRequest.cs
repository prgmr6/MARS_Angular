using System;

namespace Msde.Mars.Models.Requests
{
    /// <summary>
    /// This represents the base request entity. This must be inherited.
    /// </summary>
    public abstract class BaseRequest
    {
        /// <summary>
        /// Gets or sets the stream Id.
        /// </summary>
        public Guid StreamId { get; set; }
    }
}