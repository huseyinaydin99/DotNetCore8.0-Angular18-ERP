using ERPServer.Domain.Entities;
using ERPServer.Domain.Repositories;
using ERPServer.Infrastructure.Context;
using GenericRepository;

namespace ERPServer.Infrastructure.Repositories;

internal sealed class ProductionRepository : Repository<Production, ApplicationDbContext>, IProductionRepository
{
    public ProductionRepository(ApplicationDbContext context) : base(context)
    {
    }
}