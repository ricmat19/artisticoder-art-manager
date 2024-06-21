using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles(){
            CreateMap<AppUser, MemberDto>().ForMember(destination => destination.PhotoUrl, options => options.MapFrom(src => src.Photos.FirstOrDefault(photo => photo.IsMain))).ForMember(destination => destination.Age, options => options.MapFrom(src => src.DOB.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
        }

    }
}