namespace Msde.Mars.Events
{
    /// <summary>
    /// This represents the event entity when Breadcrumb is created.
    /// </summary>
    public class BreadCrumbCreatedEvent:BaseEvent
    {
        /// <summary>
        /// Gets the name of the event.
        /// </summary>
        public override string Name => this.GetType().Name;

        public int id { get; set; }
        /// <summary>
        /// Gets or sets the BreadCrumbText.
        /// </summary>
        public string BreadCrumbText { get; set; }

        /// <summary>
        /// Gets or sets the MARS_Pageid.
        /// </summary>
        public int MARS_Pageid { get; set; }

    }
}
