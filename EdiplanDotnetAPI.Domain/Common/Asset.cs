using System.ComponentModel.DataAnnotations.Schema;
using EdiplanDotnetAPI.Domain.Entities;

namespace EdiplanDotnetAPI.Domain.Common;

public abstract class Asset : AuditableEntity
{
    public int Id { get; set; }
    public string Name { get; set; } = "New Asset";
    public decimal? Rate { get; set; }
    public decimal? RateUnit { get; set; }
    public decimal? Value { get; set; }

    // Navigation properties
    public List<AssetGroup> AssetGroups { get; } = new();
    public List<Booking> Bookings { get; } = new();

}