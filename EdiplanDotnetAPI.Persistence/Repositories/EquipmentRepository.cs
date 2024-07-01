﻿using EdiplanDotnetAPI.Application.Contracts.Persistence;
using EdiplanDotnetAPI.Domain.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EdiplanDotnetAPI.Persistence.Repositories;
public class EquipmentRepository : BaseRepository<Equipment>, IEquipmentRepository
{
    private readonly EdiplanDbContext _dbContext;

    public EquipmentRepository(EdiplanDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;

    }
}
