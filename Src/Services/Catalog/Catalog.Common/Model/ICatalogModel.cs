﻿namespace Catalog.Common.Model
{
    public interface ICatalogDBModel
    {
        string Id { get; set; }

        string Title { get; set; }

        string Description { get; set; }
    }
}
