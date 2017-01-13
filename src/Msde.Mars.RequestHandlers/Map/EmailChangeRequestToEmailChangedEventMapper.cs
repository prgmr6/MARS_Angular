using AutoMapper;
using Msde.Mars.Business.Entities.Requests;
using Msde.Mars.Events;
namespace Msde.Mars.RequestHandlers.Map
{
    /// <summary>
    /// This represents the mapper entity for <see cref="EmailChangeRequest" /> to <see cref="EmailChangedEvent" />.
    /// </summary>
    public class EmailChangeRequestToEmailChangedEventMapper :
        BaseRequestToEventMapper<EmailChangeRequest, EmailChangedEvent>
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
                cfg.CreateMap<EmailChangeRequest, EmailChangedEvent>()
                  .ForMember(ev => ev.EventStream, o => o.MapFrom(req => req.StreamId))
                  .ForMember(ev => ev.ElementId, o => o.MapFrom(req => req.Id))
                  .ForMember(ev => ev.ElementName, o => o.MapFrom(req => req.Name))
                  .ForMember(ev => ev.ElementValue, o => o.MapFrom(req => req.Value));
            });

            IMapper mapper = config.CreateMapper();
            var source = new EmailChangeRequest();
            var dest = Mapper.Map<EmailChangeRequest, EmailChangedEvent>(source);

            this.Initialised = true;
        }
    }
}