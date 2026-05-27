import { NgFor, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { StaffMember } from '@models/staff-member.model';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  protected readonly staff = signal<StaffMember[]>([
    {
      id: 'pastor',
      name: 'Rev. Dr. Seikam Touthang',
      role: 'Senior Pastor & Moderator',
      department: 'Church Executive',
      email: 'sktouthang@pbctulsa.org'
    },
    {
      id: 'assistant-pastor',
      name: 'Rev. Onkhomang Touthang',
      role: 'Assistant Pastor',
      department: 'Church Executive',
      email: 'oktouthang@pbctulsa.org'
    },
    {
      id: 'mission-chair',
      name: 'Rev. Zamkhokhai Touthang',
      role: 'Mission Chairman',
      department: 'Church Executive',
      email: 'zamkhokhaitouthang@gmail.com',
      termStartYear: 2025,
      termEndYear: 2027
    },
    {
      id: 'men-chair',
      name: 'Ngamkhothang Haokip',
      role: 'Men Chairman',
      department: 'Church Executive',
      email: 'enkaytikip@gmail.com',
      termStartYear: 2025,
      termEndYear: 2027
    },
    {
      id: 'women-chair',
      name: 'Lheineichong Mate Touthang',
      role: 'Women Chairperson',
      department: 'Church Executive',
      termStartYear: 2025,
      termEndYear: 2027
    },
    {
      id: 'youth-chair',
      name: 'Lic. Ps. Khaiminlen Doungel',
      role: 'Youth Chairman',
      department: 'Church Executive',
      termStartYear: 2025,
      termEndYear: 2027
    },
    {
      id: 'christian-education',
      name: 'Rev. Nehminthang Touthang',
      role: 'Christian Education Minister',
      department: 'Church Executive',
      email: 'nhtouthang@pbctulsa.org'
    },
    {
      id: 'finance-secretary',
      name: 'Shominlun Lhungdim',
      role: 'Finance Secretary',
      department: 'Church Executive',
      email: 'slhungdim@pbctulsa.org'
    },
    {
      id: 'media-director',
      name: 'James Touthang',
      role: 'Technical & Media Director',
      department: 'Individual Positions',
      email: 'jtouthang@pbctulsa.org'
    }
  ]);

  protected readonly rotatingLeaders = computed(() =>
    this.staff().filter((member) => member.termStartYear && member.termEndYear)
  );

  protected termLabel(member: StaffMember): string {
    if (!member.termStartYear || !member.termEndYear) {
      return 'Ongoing';
    }

    return `${member.termStartYear}-${member.termEndYear}`;
  }
}
