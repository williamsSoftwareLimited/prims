import { TestBed } from '@angular/core/testing';

import { PrimsService } from './prims.service';
import { Vertex } from '../models/vertex';
import { Edge } from '../models/edge';

describe('PrimsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimsService = TestBed.get(PrimsService);
    expect(service).toBeTruthy();
  });
  it('should find minimum', () => {
    const primsService: PrimsService = TestBed.get(PrimsService);
    primsService.vertex = new Vertex("testName");
    primsService.vertex.edges.push(new Edge("test1", 1));
    primsService.vertex.edges.push(new Edge("test2", 2));
    primsService.vertex.edges.push(new Edge("test3", 3));
    primsService.findMinEdgeInVertex();
    expect(primsService.minEdge.weight).toEqual(1);
  });
  it('should make vertex with one edge', () => {
    const primsService: PrimsService = TestBed.get(PrimsService);
    const vertex = primsService.makeMinSpanVertexWithOneEdge("testVertex", 123, "adjacentVertex");
    expect(vertex.edges.length).toEqual(1);
  });
});
