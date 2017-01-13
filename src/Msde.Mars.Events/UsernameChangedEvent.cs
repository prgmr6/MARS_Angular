﻿namespace Msde.Mars.Events
{
    /// <summary>
    /// This represents the event entity when given name change occurs.
    /// </summary>
    public class UsernameChangedEvent : InputValueChangedEvent
    {
        /// <summary>
        /// Gets the name of the event.
        /// </summary>
        public override string Name => this.GetType().Name;
    }
}
