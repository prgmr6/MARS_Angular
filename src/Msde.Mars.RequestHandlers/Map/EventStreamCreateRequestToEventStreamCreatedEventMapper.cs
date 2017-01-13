using AutoMapper;
using Msde.Mars.Business.Entities.Requests;
using Msde.Mars.Events;
namespace Msde.Mars.RequestHandlers.Map
{
    /// <summary>
    /// This represents the mapper entity for <see cref="EventStreamCreateRequest" /> to <see cref="EventStreamCreatedEvent" />.
    /// </summary>
    public class EventStreamCreateRequestToEventStreamCreatedEventMapper :
        BaseRequestToEventMapper<EventStreamCreateRequest, EventStreamCreatedEvent>
    {
        /// <summary>
        /// Initialises the mapping definition.
        /// </summary>
        protected override void Initialise()
        {
            if (this.Initialised)
            {
                return;
            }

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<EventStreamCreateRequest, EventStreamCreatedEvent>()
                  .ForMember(ev => ev.EventStream, o => o.MapFrom(req => req.StreamId));
            });

            IMapper mapper = config.CreateMapper();
            var source = new EventStreamCreateRequest();
            var dest = Mapper.Map<EventStreamCreateRequest, EventStreamCreatedEvent>(source);

            this.Initialised = true;
        }
    }
}