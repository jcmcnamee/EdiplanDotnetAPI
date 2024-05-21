using AutoMapper;
using EdiplanDotnetAPI.Application.Features.Assets.Commands.CreateAsset;
using EdiplanDotnetAPI.Application.Features.Assets.Queries.GetAssetDetail;
using EdiplanDotnetAPI.Application.Features.Assets.Queries.GetAssetsList;
using EdiplanDotnetAPI.Application.Features.BookingGroups.Commands.CreateBookingGroup;
using EdiplanDotnetAPI.Application.Features.BookingGroups.Queries.GetBookingGroupMembers;
using EdiplanDotnetAPI.Application.Features.BookingGroups.Queries.GetBookingGroupsList;
using EdiplanDotnetAPI.Application.Features.Bookings.Commands.CreateBooking;
using EdiplanDotnetAPI.Application.Features.Bookings.Commands.UpdateBooking;
using EdiplanDotnetAPI.Application.Features.Bookings.Queries.GetBookingDetail;
using EdiplanDotnetAPI.Application.Features.Bookings.Queries.GetBookingsList;
using EdiplanDotnetAPI.Domain.Common;
using EdiplanDotnetAPI.Domain.Entities;

namespace EdiplanDotnetAPI.Application.Profiles;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        // Command entity mapping
        CreateMap<Booking, CreateBookingCommand>().ReverseMap();
        CreateMap<Booking, UpdateBookingCommand>().ReverseMap();
        CreateMap<BookingGroup, CreateBookingGroupCommand>().ReverseMap();
        CreateMap<Equipment, CreateEquipmentCommand>().ReverseMap();

        // Entity view model mapping
        CreateMap<Booking, BookingListVm>().ReverseMap();
        CreateMap<Booking, BookingDetailVm>().ReverseMap();
        CreateMap<BookingGroup, BookingGroupListVm>();
        CreateMap<BookingGroup, BookingGroupMemberListVm>();
        CreateMap<Asset, AssetListVm>().ReverseMap();
        CreateMap<Asset, EquipmentDetailVm>().ReverseMap();
        CreateMap<Asset, PersonDetailVm>().ReverseMap();
        CreateMap<Asset, RoomDetailVm>().ReverseMap();

        // Internal DTOs
        CreateMap<Production, ProductionDto>().ReverseMap();

        // Response DTOs
        CreateMap<Booking, CreateBookingDto>().ReverseMap();
        CreateMap<BookingGroup, CreateBookingGroupDto>().ReverseMap();
        CreateMap<Equipment, CreateEquipmentDto>().ReverseMap();

    }
}
