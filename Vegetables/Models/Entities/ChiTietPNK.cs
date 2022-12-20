namespace Vegetables.Models.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChiTietPNK")]
    public partial class ChiTietPNK
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MaPNK { get; set; }

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
