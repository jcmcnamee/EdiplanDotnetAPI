﻿using MediatR;

namespace EdiplanDotnetAPI.Application.Features.BookingGroups.Queries.GetBookingGroupsList;

public class GetBookingGroupListQuery : IRequest<List<BookingGroupListVm>>
{
}

