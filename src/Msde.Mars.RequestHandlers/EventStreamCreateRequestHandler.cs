﻿using System;
using Msde.Mars.Events;
using Msde.Mars.RequestHandlers.Map;
using Msde.Mars.Business.Entities.Requests;

namespace Msde.Mars.RequestHandlers
{
    /// <summary>
    /// This represents the request handler entity for salutation change.
    /// </summary>
    public class EventStreamCreateRequestHandler : BaseRequestHandler<EventStreamCreateRequest, EventStreamCreatedEvent>
    {
        private readonly IRequestToEventMapper<EventStreamCreateRequest, EventStreamCreatedEvent> _mapper;

        /// <summary>
        /// Initializes a new instance of the <see cref="EventStreamCreateRequestHandler" /> class.
        /// </summary>
        /// <param name="mapper">The event mapper instance.</param>
        public EventStreamCreateRequestHandler(IRequestToEventMapper<EventStreamCreateRequest, EventStreamCreatedEvent> mapper)
        {
            if (mapper == null)
            {
                throw new ArgumentNullException(nameof(mapper));
            }

            this._mapper = mapper;
        }

        /// <summary>
        /// Called while creating the event from the request.
        /// </summary>
        /// <param name="request">Request instance.</param>
        /// <returns>Returns the event created.</returns>
        protected override EventStreamCreatedEvent OnCreatingEvent(BaseRequest request)
        {
            var @event = this._mapper.Map(request as EventStreamCreateRequest);
            return @event;
        }
    }
}