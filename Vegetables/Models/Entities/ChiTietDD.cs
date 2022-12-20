namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietDD")]
    public partial class ChiTietDD
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaDD { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaSP { get; set; }

        public int? SoLuong { get; set; }

        public long? ThanhTien { get; set; }

        public virtual SanPham SanPham { get; set; }

        public virtual ChiTietSP ChiTietSP { get; set; }
    }
}
