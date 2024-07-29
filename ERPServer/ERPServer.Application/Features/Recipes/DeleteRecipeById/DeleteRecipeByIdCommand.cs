using MediatR;
using TS.Result;

namespace ERPServer.Application.Features.Recipes.DeleteRecipeById;
public sealed record DeleteRecipeByIdCommand(
    Guid Id) : IRequest<Result<string>>;