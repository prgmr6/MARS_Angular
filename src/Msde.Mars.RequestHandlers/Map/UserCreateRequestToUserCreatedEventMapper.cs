using AutoMapper;
using Msde.Mars.Business.Entities.Requests;
using Msde.Mars.Events;
namespace Msde.Mars.RequestHandlers.Map
{
    /// <summary>
    /// This represents the mapper entity for <see cref="UserCreateRequest" /> to <see cref="UserCreatedEvent" />.
    /// </summary>
    public class UserCreateRequestToUserCreatedEventMapper :
        BaseRequestToEventMapper<UserCreateRequest, UserCreatedEvent>
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
                cfg.CreateMap<UserCreateRequest, UserCreatedEvent>()
                  .ForMember(ev => ev.EventStream, o => o.MapFrom(req => req.StreamId))
                  .ForMember(ev => ev.Username, o => o.MapFrom(req => req.Name));
            });

            IMapper mapper = config.CreateMapper();
            var source = new UserCreateRequest();
            var dest = Mapper.Map<UserCreateRequest, UserCreatedEvent>(source);
            this.Initialised = true;
        }
    }
}