using AutoMapper;
using Msde.Mars.Business.Entities.Requests;
using Msde.Mars.Events;

namespace Msde.Mars.RequestHandlers.Map
{
    public class BreadCrumbChangeRequestToBreadCrumbChangedEventMapper:
        BaseRequestToEventMapper<BreadCrumbChangeRequest, BreadCrumbChangedEvent>
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
                cfg.CreateMap<BreadCrumbChangeRequest, BreadCrumbChangedEvent>()
                  .ForMember(ev => ev.EventStream, o => o.MapFrom(req => req.StreamId))
                  .ForMember(ev => ev.ElementId, o => o.MapFrom(req => req.Id))
                  .ForMember(ev => ev.ElementName, o => o.MapFrom(req => req.Name))
                  .ForMember(ev => ev.ElementValue, o => o.MapFrom(req => req.Value));
            });

            IMapper mapper = config.CreateMapper();
            var source = new BreadCrumbChangeRequest();
            var dest = Mapper.Map<BreadCrumbChangeRequest, BreadCrumbChangedEvent>(source);

            this.Initialised = true;
        }
    }
}
