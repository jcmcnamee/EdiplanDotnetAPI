using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ediplan.Application.Features.Bookings.Queries.GetBookingDetail;

public class LocationDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
}
