﻿using AutoMapper;
using EdiplanDotnetAPI.Application.Contracts.Persistence;
using EdiplanDotnetAPI.Domain.Entities;
using MediatR;

namespace EdiplanDotnetAPI.Application.Features.BookingGroups.Queries.GetBookingGroupsList;

public class GetBookingGroupListQueryHandler : IRequestHandler<GetBookingGroupListQuery, List<BookingGroupListVm>>
{
    private readonly IMapper _mapper;
    private readonly IAsyncRepository<BookingGroup> _bookingGroupRepository;

    public GetBookingGroupListQueryHandler(IMapper mapper, IAsyncRepository<BookingGroup> bookingGroupRepository)
    {
        _mapper = mapper;
        _bookingGroupRepository = bookingGroupRepository;
    }
    public async Task<List<BookingGroupListVm>> Handle(GetBookingGroupListQuery request, CancellationToken cancellationToken)
    {
        var allBookingGroups = (await _bookingGroupRepository.ListAllAsync()).OrderBy(x => x.Name);
        return _mapper.Map<List<BookingGroupListVm>>(allBookingGroups);
    }
}

